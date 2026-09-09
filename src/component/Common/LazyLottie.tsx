import { CSSProperties, ReactNode, Suspense, lazy } from 'react';
import { useLottieJson } from '../../util/useLottieJson';

// Lottie 렌더러(lottie-web, gzip 77KB)까지 lazy 로 미룬다.
// Topbar가 모든 페이지에 있어서, 여기서 정적 import 하면 lottie-web이
// 첫 로딩 JS에 무조건 포함된다. 애니메이션은 화면이 뜬 뒤에 나타나도 되는 부가 요소라
// 렌더러와 JSON 둘 다 나중에 받아온다.
const Lottie = lazy(() => import('lottie-react'));

interface LazyLottieProps {
    name: string;              // public/lotties/<name>.json
    style?: CSSProperties;
    loop?: boolean;
    fallback?: ReactNode;      // 애니메이션이 준비되기 전에 보여줄 것
}

const LazyLottie = ({ name, style, loop = true, fallback = null }: LazyLottieProps) => {
    const animationData = useLottieJson(name);

    if (!animationData) return <>{fallback}</>;

    return (
        <Suspense fallback={<>{fallback}</>}>
            <Lottie
                animationData={animationData}
                loop={loop}
                style={style}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
        </Suspense>
    );
};

export default LazyLottie;
