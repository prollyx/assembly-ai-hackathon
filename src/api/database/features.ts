import {
    Feature,
    Prisma,
    PrismaClient,
    Project,
    Responses,
    User,
  } from "@prisma/client";
  
  const prisma = new PrismaClient();

/** get project features */
export async function addFeature(
    input: Prisma.FeatureCreateInput
  ): Promise<Feature> {
    return new Promise(async (resolve, reject) => {
    await prisma.feature
      .create({ data: input })
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
  }
  
  export async function updateFeature(
    input: Prisma.FeatureCreateInput
  ): Promise<Feature> {
    try {
      const feature = await prisma.feature.update({
        where: { id: input.id },
        data: input,
      });
  
      return feature;
    } catch (e) {
      throw new Error("feature not updated");
    }
  }
  
  export async function deleteFeature(
    input: Prisma.FeatureCreateInput
  ): Promise<Feature> {
    try {
      const feature = await prisma.feature.delete({
        where: { id: input.id },
      });
  
      return feature;
    } catch (e) {
      throw new Error("feature not deleted");
    }
  }
  
  /** get project features */
  export async function getProjectFeatures(
    projectId: string
  ): Promise<Feature[]> {
     return new Promise(async (resolve, reject) => {
      console.log({projectId});
      
    await prisma.feature
      .findMany({ where: {projectId} })
      .then((result) => resolve(result))
      .catch((e) => reject(e));
  });
  }