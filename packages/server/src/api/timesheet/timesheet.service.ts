import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';
import { Timesheet } from './entities/timesheet.entity';

@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet)
    private repository: Repository<Timesheet>,
  ) {}

  create(createTimesheetInput: CreateTimesheetInput) {
    const newTimesheet = this.repository.create(createTimesheetInput);

    return this.repository.save(newTimesheet);
  }

  async findAll(): Promise<Timesheet[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Timesheet> {
    return this.repository.findOne({ where: { id: id } });
  }

  update(id: number, updateTimesheetInput: UpdateTimesheetInput) {
    return `This action updates a #${id} timesheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} timesheet`;
  }
}
