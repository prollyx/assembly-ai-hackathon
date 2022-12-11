import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="happy_path"
      templateType={TemplateType.HAPPY_PATH}
      title="Happy Path"
    />
  );
}
