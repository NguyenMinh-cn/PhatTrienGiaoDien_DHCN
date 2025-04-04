const importAllImages = (r) => {
    let images = {};
    r.keys().forEach((key) => {
        const imageName = key.replace('./', '').replace(/\.[^/.]+$/, ''); // Xóa ./ và đuôi file
        images[imageName] = r(key); // Lưu đường dẫn hình ảnh vào đối tượng
    });
    return images;
};

// Sử dụng import.meta.glob để load tất cả các file hình ảnh có đuôi .png, .jpg, .jpeg, .svg trong thư mục assets/img
const images = importAllImages(
    import.meta.glob('../assets/img/*.{png,jpg,jpeg,svg}', { eager: true })
);

export default images;
