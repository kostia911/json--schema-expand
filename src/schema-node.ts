export interface ModuleData {
    name: string;
    type: string;
    instanceName?: string;
    propertyName: string;
    properties: ModuleData[];
    values?: { [name: string]: string };
    minLength?: number;
    maxLength?: number;
}

export interface CollectionModelData {
    name: string;
    type: string;
    instanceName: string;
    propertyName: string;
    properties: ModuleData[];
    minLength: number;
    maxLength: number;
}

export interface EnumModelData {
    name: string;
    type: string;
    propertyName: string;
    properties: ModuleData[];
    values: { [name: string]: string };
}
