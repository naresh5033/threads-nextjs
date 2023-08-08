// Resource: https://docs.uploadthing.com/api-reference/react#generatereacthelpers
// Copy paste (be careful with imports)
//according to the doc, the GenerateReactHelpers is used to generate the userUploadThing() hook, and the uploadfile() that we used to interact with uploadthing comp in a cust comps, it takes our file router as the generic 
import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();


  //make sure to create couple of files in api/uploadthing/core.ts and route.ts (grab the code from the doc and put em in those files)