type screen = {
    pixed: number,
    brightness: number,
    model: string
};
type speaker = {
    volume: number,
    model: string,
    bass: number
};
type Laptop = {
    id: string,
    screen: screen[],
    speaker: speaker[],
    battery: number
};