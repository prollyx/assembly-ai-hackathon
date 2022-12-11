import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="test_cases"
      templateType={TemplateType.TEST_CASES}
      title="Test Cases"
    />
  );
}
