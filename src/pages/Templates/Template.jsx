import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CreateOrEditTemplate, CreatenewMileStone, TemplateList, TemplateScope } from '.';

export const Template = () => {
  return (
    <React.Fragment>
      <TemplateScope>
        <Routes>
          <Route path="/" element={<TemplateList />} />
          <Route path="/detailPage" element={<CreateOrEditTemplate />} />
          <Route path="/detailPage/:id" element={<CreateOrEditTemplate />} />
        </Routes>
      </TemplateScope>
    </React.Fragment>
  );
}
