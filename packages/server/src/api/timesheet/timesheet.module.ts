import { Module } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { TimesheetResolver } from './timesheet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timesheet } from './entities/timesheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timesheet])],
  providers: [TimesheetResolver, TimesheetService],
})
export class TimesheetModule {}
