const cn = classNames;

export const FeatureSectionContent: React.VFC<{
    children: React.ReactNode;
    enable: boolean;
}> = ({ children, enable }) => {
    return (
        <div
            className={cn("flex flex-col gap-2 border-t p-4 pl-0", {
                "opacity-50": !enable,
            })}
        >
            {children}
        </div>
    );
};
