import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidationTaskPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { name, age } = value;

    const ageNew = parseInt(age.toString(), 10);

    if (isNaN(ageNew))
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);

    return { ...value, age: ageNew };
  }
}
