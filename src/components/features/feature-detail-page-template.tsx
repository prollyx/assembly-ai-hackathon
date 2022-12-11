import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useProjectContext } from "../../context/project.provider";
import { TemplateType } from "../../types";
import { PageLayout } from "../page-layout";
import { Template } from "../template/template-page";

export interface FeatureDetailPageTemplateProps {
  title: string;
  fieldName: string;
  templateType: TemplateType;
}

const FeatureDetailTemplatePage: FC<FeatureDetailPageTemplateProps> = ({
  fieldName,
  templateType,
  title,
}) => {
  const { push } = useRouter();
  const { activeFeature } = useProjectContext();

  useEffect(() => {
    if (!activeFeature) {
      push("/projects");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFeature]);

  if (activeFeature) {
    return (
      <PageLayout>
        <Template
          feature={activeFeature}
          title={title}
          fieldName={fieldName}
          templateType={templateType}
        />
      </PageLayout>
    );
  }

  return null;
};

export { FeatureDetailTemplatePage };
