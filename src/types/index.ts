export interface CarObject {
    id: number;
    tags: string[];
    title: string;
    image: string;
    soldBy: {
        name: string;
    };
    rating: number;
}
