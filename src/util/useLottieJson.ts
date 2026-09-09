import { useEffect, useState } from 'react';

// Lottie 애니메이션 JSON을 번들에 인라인하지 않고 런타임에 받아온다.
// import 로 가져오면 JSON이 통째로 JS 번들 안에 문자열로 박힌다.
// (logo 548KB + splash 306KB + skill 116KB + loading 82KB + error 55KB = 1.1MB)
// public/lotties 로 빼두고 fetch 하면 첫 로딩에 필요한 JS에서 이 용량이 전부 빠진다.
const cache = new Map<string, unknown>();

export const useLottieJson = (name: string) => {
    const [data, setData] = useState<unknown>(() => cache.get(name) ?? null);

    useEffect(() => {
        const cached = cache.get(name);
        if (cached) {
            setData(cached);
            return;
        }

        let alive = true;
        fetch(`/lotties/${name}.json`)
            .then((res) => (res.ok ? res.json() : null))
            .then((json) => {
                if (!json) return;
                cache.set(name, json);
                if (alive) setData(json);
            })
            .catch(() => {
                // 애니메이션은 부가 요소다. 못 받아와도 화면은 fallback으로 그대로 뜬다.
            });

        return () => {
            alive = false;
        };
    }, [name]);

    return data;
};
