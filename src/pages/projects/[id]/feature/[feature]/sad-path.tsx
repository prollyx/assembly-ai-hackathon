import { FeatureDetailTemplatePage } from "../../../../../components/features/feature-detail-page-template";
import { TemplateType } from "../../../../../types";

export default function FeatureDetailPage() {
  return (
    <FeatureDetailTemplatePage
      fieldName="sad_path"
      templateType={TemplateType.SAD_PATH}
      title="Sad Path"
    />
  );
}
