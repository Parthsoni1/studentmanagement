import React, { useState, useEffect } from 'react';
import CommonTable from '../../shared/CommonTable';
import TeacherService from '../../services/TechearService';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    TeacherService.getAllTeachers()
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Error fetching teachers:', error));
  }, []);

  const teacherColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'subject', header: 'Subject' }
  ];

  return (
    <CommonTable
      data={teachers}
      columns={teacherColumns}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      title="Teacher List"
    />
  );
};

export default TeacherList;
