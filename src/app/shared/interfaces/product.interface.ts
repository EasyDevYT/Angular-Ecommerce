export interface Product {
    id: number;
    code: string;
    title: string;
    description?: string;
    image_src: string;
    id_fabric_type?: number; // TODO what was this? xd
}