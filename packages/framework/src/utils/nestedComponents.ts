export function getComponentName(text: string): string {
    const componentName = text
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .replace(/^-/, "")
        .toLowerCase();

    return `db-${componentName}`;
}

export function getComponentData(component: any) {
    const { tile, ...rest } = component;

    return rest;
}
