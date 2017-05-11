import {Component} from '@angular/core';
import {Course} from './course';

@Component({
    moduleId: module.id,
	selector:'course-form',
	templateUrl:'course-form.component.html',
	styleUrls:['forms.css']
})

export class CourseFormComponent{
	
	abc=new Course(1,'Angular2','4 days');
	submitted = false;

	onSubmit(){this.submitted = true;}

	newCourse(){
		this.abc = new Course(0,'','');
	}
}