import { Component, OnInit, TemplateRef  } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  isDisabled = false;

  modalRef: BsModalRef;
  public memberList = [];
  public popupDetail = {empName : '', empId : '', empEmail : '', joinDate : '', endDate : '', age : ''};
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    const data = [{empName : 'John', empId : 'E-12', empEmail : 'john@example.com',
      joinDate : '12-10-2013', endDate : '12-10-2016', age : '25'},
      {empName : 'Mary', empId : 'E-13', empEmail : 'Mary@example.com',
      joinDate : '12-10-2012', endDate : '12-10-2017', age : '26'},
      {empName : 'July', empId : 'E-14', empEmail : 'July@example.com',
      joinDate : '12-10-2011', endDate : 'Till Date', age : '27'}];
    this.memberList = data;
  }

  openModal(template: TemplateRef<any>, member) {
    this.modalRef = this.modalService.show(template);
    if (member) {
      this.popupDetail.empName = member.empName;
      this.popupDetail.empId = member.empId;
      this.popupDetail.empEmail = member.empEmail;
      this.popupDetail.joinDate = member.joinDate;
      this.popupDetail.endDate = member.endDate;
      this.popupDetail.age = member.age;
    } else {
      this.popupDetail.empName = '';
      this.popupDetail.empId = '';
      this.popupDetail.empEmail = '';
      this.popupDetail.joinDate = '';
      this.popupDetail.endDate = '';
      this.popupDetail.age = '';
    }
  }

  get addDetailsForm() {
    return JSON.stringify ({
      addName: this.popupDetail.empName,
      addempId: this.popupDetail.empId,
      addempEmail: this.popupDetail.empEmail,
      addjoinDate: this.popupDetail.joinDate,
      addendDate: this.popupDetail.endDate,
      addage: this.popupDetail.age
    });
  }
}
