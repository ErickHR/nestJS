import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(@Req() req: Request, @Res() res: Response, @Query() query) {
    console.log(query);
    res.json(this.taskService.getTasks());
    // return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id) {
    return this.taskService.getTaskById(+id);
  }

  @Post()
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
}
