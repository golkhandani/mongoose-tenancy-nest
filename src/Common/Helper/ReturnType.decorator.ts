import { ClassTransformer, ClassTransformOptions } from 'class-transformer';



export function ReturnType(
    classType: any,
    params?: ClassTransformOptions
): MethodDecorator {
    return function (target: Record<string, any>, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void {
        const classTransformer: ClassTransformer = new ClassTransformer();
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]): Promise<Record<string, any>> {
            const result: any = await originalMethod.apply(this, args);
            if (Array.isArray(result)) {
                return classTransformer.plainToClass(classType, result, params);
            } else if (result.toObject) {
                return classTransformer.plainToClass(classType, result.toObject(), params);
            } else {
                return classTransformer.plainToClass(classType, result, params);
            }

        };
    };
}
