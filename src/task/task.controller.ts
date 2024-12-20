import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Request, Response } from 'express';
import { CreateTaskDto } from './create-task.dto';
import { ValidationTaskPipe } from './validation-task/validation-task.pipe';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @HttpCode(200)
  getTasks(@Req() req: Request, @Res() res: Response, @Query() query) {
    console.log(query);
    console.log('entreando aqui');
    res.json(this.taskService.getTasks());
    // return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id) {
    return this.taskService.getTaskById(+id);
  }

  @Post()
  @HttpCode(201)
  // @UsePipes(new ValidationPipe())
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.createTask(body);
  }

  @Put(':id')
  updateTask(@Param('id') id) {
    console.log(id);
    return 'update task';
  }

  @Patch()
  patchTask() {
    return 'patch task';
  }

  @Delete()
  deleteTask() {
    return 'delete task';
  }

  @Get('pipes/number/:id')
  getPipes(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return id;
  }

  @Get('pipes/boolean/:status')
  getPipesBoolean(@Param('status', ParseIntPipe) status: boolean) {
    console.log(status);
    console.log(typeof status);
    return status;
  }

  @Get('/pipes/object')
  getPipesObject(
    @Query(ValidationTaskPipe) query: { name: string; age: number },
  ) {
    const { name, age } = query;
    console.log(name, typeof name);
    console.log(age, typeof age);
    return { name, age };
  }
}
