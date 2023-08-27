export declare const DockerItem: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    itemClick: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onItemClick?: () => any;
}, {
    text: string;
    src: string;
}, {}>;
