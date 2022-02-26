import { clearTimer } from "~/features/autorunDetection/functions";

const cn = classNames;

export const ToggleAutorun: React.VFC = () => {
    const config = unsafeWindow.LAOPLUS.config;

    const [enabled, setEnabled] = React.useState(
        config.config.features.autorunDetection.enabled
    );

    config.events.on("changed", (e) => {
        setEnabled(e.features.autorunDetection.enabled);
    });

    const handleClick = () => {
        config.set({ features: { autorunDetection: { enabled: !enabled } } });
        clearTimer();
    };

    return (
        <button
            onClick={handleClick}
            title={`自動周回停止判定を${enabled ? "オフ" : "オン"}にする`}
            className={cn(
                "h-6 text-white drop-shadow-featureIcon",
                enabled && "animate-spin"
            )}
            style={{
                animationDuration: "2s",
                animationTimingFunction: "ease-in-out",
            }}
        >
            <i className="bi bi-arrow-repeat"></i>
        </button>
    );
};
