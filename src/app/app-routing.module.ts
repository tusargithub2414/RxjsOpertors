import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighChartsCompComponent } from './high-charts-comp/high-charts-comp.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReactiveFormComponent } from './observable/reactive-form/reactive-form.component';
import { ReplySubjectComponent } from './observable/reply-subject/reply-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent},
  { path: 'highcharts', component:HighChartsCompComponent},
  { path: 'observable', component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'formEvent', component: FormEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of-from', component: OfFromComponent},
    {path: 'to-array', component: ToArrayComponent},
    { path: 'custom-observable', component: CustomObservableComponent},
    { path: 'map', component: MapComponent},
    { path: 'pluck', component: PluckComponent},
    { path: 'filter', component: FilterComponent},
    { path: 'tap', component: TapComponent},
    { path: 'take', component: TakeComponent},
    { path: 'retry', component: RetryComponent},
    { path: 'debounceTime', component:DebounceTimeComponent},
    { path: 'subject', component:SubjectComponent},
    { path: 'reply-subject', component:ReplySubjectComponent},
    { path: 'async-subject', component:AsyncSubjectComponent},
    { path: 'concat', component:ConcatComponent},
    { path: 'merge', component:MergeComponent},
    { path: 'MargeMap',component:MergeMapComponent },
    { path: 'reactive-form',component:ReactiveFormComponent }
  ]},
  { path: '**', redirectTo:'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
