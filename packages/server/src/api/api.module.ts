import { Module } from '@nestjs/common';
import { TimesheetModule } from './timesheet/timesheet.module';

@Module({
  imports: [TimesheetModule],
})
export class ApiModule {}
