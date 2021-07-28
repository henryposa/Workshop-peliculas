export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dusnjqou6/image/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'react-app')
    formData.append('file', file)
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cluodRes = await resp.json()
            console.log('data', cluodRes)
            return cluodRes.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}