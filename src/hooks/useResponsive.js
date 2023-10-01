import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
    const isDesktop = useMediaQuery({
        query: `(min-width: 1025px)`,
    });
    const isTablet = useMediaQuery({
        query: `(min-width: 768px) and (max-width: 1024px)`,
    });
    const isMobile = useMediaQuery({
        query: `(max-width: 767px)`,
    });

    return {
        isDesktop,
        isTablet,
        isMobile,
    };
}