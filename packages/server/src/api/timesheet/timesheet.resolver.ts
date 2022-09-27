import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimesheetService } from './timesheet.service';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';
import { Timesheet } from './entities/timesheet.entity';

@Resolver((of) => Timesheet)
export class TimesheetResolver {
  constructor(private timesheetService: TimesheetService) {}

  @Mutation(() => [Timesheet])
  createTimeSheet(
    @Args('createTimesheetInput') createTimesheetInput: CreateTimesheetInput,
  ) {
    return this.timesheetService.create(createTimesheetInput);
  }

  @Query(() => [Timesheet])
  timesheets(): Promise<Timesheet[]> {
    return this.timesheetService.findAll();
  }

  @Query(() => Timesheet)
  getTimeSheet(@Args('id', { type: () => Int }) id: number) {
    return this.timesheetService.findOne(id);
  }

  // @Mutation('updateTimesheet')
  // update(@Args('updateTimesheetInput') updateTimesheetInput: UpdateTimesheetInput) {
  //   return this.timesheetService.update(updateTimesheetInput.id, updateTimesheetInput);
  // }

  // @Mutation('removeTimesheet')
  // remove(@Args('id') id: number) {
  //   return this.timesheetService.remove(id);
  // }
}
