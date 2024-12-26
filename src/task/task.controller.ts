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
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Request, Response } from 'express';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(@Req() req: Request, @Res() res: Response, @Query() query) {
    console.log(query);
    res.send('Hello Wasorld!');
    // return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id) {
    return this.taskService.getTaskById(+id);
  }

  @Post()
  createTask(@Body() body) {
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
