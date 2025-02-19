import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const CommonTable = (props: any) => {
  //{ data, columns, globalFilter, setGlobalFilter, title }
  const { data, columns, globalFilter, setGlobalFilter, title  } = props
  return (
    <div className="datatable-demo">
      <h3>{title}</h3>
      <div className="p-inputgroup" style={{ marginBottom: '10px' }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-search"></i>
        </span>
        <input
          type="text"
          className="p-inputtext"
          placeholder="Search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <DataTable
        value={data}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 20]}
        globalFilter={globalFilter}
        responsiveLayout="scroll"
        sortMode="multiple"
      >
        {columns.map((col: any) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            sortable={col.sortable || true}
            filter={col.filter || true}
            filterPlaceholder={col.filterPlaceholder || `Search by ${col.header}`}
            body={col.body || null}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default CommonTable;
