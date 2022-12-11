import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="user_stories"
      templateType={TemplateType.USER_STORIES}
      title="User Stories"
    />
  );
}
