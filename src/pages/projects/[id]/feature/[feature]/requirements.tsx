import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="requirements"
      templateType={TemplateType.REQUIREMENTS}
      title="Requirements"
    />
  );
}
