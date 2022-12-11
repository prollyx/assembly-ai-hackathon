import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="edge_cases"
      templateType={TemplateType.EDGE_CASES}
      title="Edge Cases"
    />
  );
}
