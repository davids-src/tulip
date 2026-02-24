'use client';

import { useEffect, useRef, useState } from 'react';

interface YouTubePlayerProps {
    videoId: string;
    title?: string;
    className?: string;
}

declare global {
    interface Window {
        YT: {
            Player: new (
                el: HTMLElement,
                opts: {
                    videoId: string;
                    playerVars?: Record<string, number | string>;
                    events?: {
                        onReady?: (e: { target: YTPlayer }) => void;
                        onStateChange?: (e: { data: number }) => void;
                    };
                }
            ) => YTPlayer;
            PlayerState: { PLAYING: number };
        };
        onYouTubeIframeAPIReady: () => void;
    }
}

interface YTPlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    unMute: () => void;
    mute: () => void;
    isMuted: () => boolean;
    destroy: () => void;
}

export default function YouTubePlayer({ videoId, title = 'Video', className = '' }: YouTubePlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<YTPlayer | null>(null);
    const playerElRef = useRef<HTMLDivElement>(null);
    const [muted, setMuted] = useState(true);
    const [ready, setReady] = useState(false);
    const [visible, setVisible] = useState(false);

    /* 1. YouTube IFrame API betöltése */
    useEffect(() => {
        if (document.getElementById('yt-api-script')) {
            if (window.YT?.Player) initPlayer();
            return;
        }
        const script = document.createElement('script');
        script.id = 'yt-api-script';
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);

        window.onYouTubeIframeAPIReady = () => initPlayer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function initPlayer() {
        if (!playerElRef.current) return;
        playerRef.current = new window.YT.Player(playerElRef.current, {
            videoId,
            playerVars: {
                autoplay: 0,
                mute: 1,
                loop: 1,
                playlist: videoId,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
            },
            events: {
                onReady: () => setReady(true),
            },
        });
    }

    /* 2. IntersectionObserver – automatikus lejátszás görgetéskor */
    useEffect(() => {
        if (!ready || !containerRef.current) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    playerRef.current?.playVideo();
                } else {
                    playerRef.current?.pauseVideo();
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, [ready]);

    /* 3. Hang toggle */
    function toggleMute() {
        if (!playerRef.current) return;
        if (playerRef.current.isMuted()) {
            playerRef.current.unMute();
            setMuted(false);
        } else {
            playerRef.current.mute();
            setMuted(true);
        }
    }

    return (
        <div ref={containerRef} className={`relative aspect-video overflow-hidden border border-border shadow-2xl ${className}`}>
            {/* YouTube Player tartó div – az API ezt cseréli iframe-re */}
            <div ref={playerElRef} className="absolute inset-0 w-full h-full" />

            {/* Unmute / Mute gomb – görgetéskor jelenik meg */}
            <div
                className={`absolute bottom-4 right-4 z-10 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <button
                    onClick={toggleMute}
                    title={muted ? 'Hang bekapcsolása' : 'Hang kikapcsolása'}
                    className="flex items-center gap-2 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white border border-white/20 px-4 py-2 text-xs font-rubik font-light uppercase tracking-widest transition-all duration-300 hover:border-[#d11133]"
                >
                    {muted ? (
                        <>
                            <span className="text-base">🔇</span>
                            <span>Hang be</span>
                        </>
                    ) : (
                        <>
                            <span className="text-base">🔊</span>
                            <span>Hang ki</span>
                        </>
                    )}
                </button>
            </div>

            {/* Töltési placeholder – amíg a player nem inicializálódott */}
            {!ready && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#1d1d1b]">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-2 border-[#d11133] border-t-transparent rounded-full animate-spin" />
                        <p className="text-xs font-rubik text-white/60 uppercase tracking-widest">Betöltés...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
