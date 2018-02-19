import AWS from "aws-sdk";

export async function authUser() {
    if (
        AWS.config.credentials &&
        Date.now() < AWS.config.credentials.expireTime - 60000
    ) {
        return true;
    }

    const currentUser = getCurrentUser();

    if (currentUser === null) {
        return false;
    }

    const userToken = await getUserToken(currentUser);

    await getAwsCredentials(userToken);

    return true;
}

export async function s3Upload(file, filenameInput) {
    if (!await authUser()) {
        throw new Error("User is not logged in");
    }
    const s3 = new AWS.S3({
        params: {
            Bucket: "floatfileshare"
        }
    });
    const filename = filenameInput;

    return s3
        .upload({
            Key: filename,
            Body: file,
            ContentType: file.type,
            ACL: "public-read"
        })
        .promise();
}