import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="acceptance_criteria"
      templateType={TemplateType.ACCEPTANCE_CRITERIA}
      title="Acceptance Criteria"
    />
  );
}
