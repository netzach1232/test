
document.querySelector('.circle-input').addEventListener('input', function (e) {
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3); // חותך את התווים העודפים
    }
});


let scrollInterval;

document.querySelector('.circle-input').addEventListener('input', function (e) {
    // גבול להזנת 3 ספרות בלבד
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }

    const speed = parseInt(this.value, 10) || 0; // קבלת המהירות או 0 אם השדה ריק

    // עצירה אם מהירות שווה ל-0
    if (speed === 0) {
        clearInterval(scrollInterval);
        return;
    }

    // עצירה של גלילה קודמת
    clearInterval(scrollInterval);

    // יצירת גלילה חדשה
    scrollInterval = setInterval(() => {
        window.scrollBy(0, 1); // גלילה של פיקסל אחד
    }, 4200 / speed); // ככל שהמספר גבוה יותר, הזמן בין הגלילות קטן יותר (מהירות גבוהה יותר)
});

document.getElementById('deleteImages').addEventListener('click', function () {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // מוחק את כל התמונות
});

document.getElementById('uploadImages').addEventListener('click', function () {
    document.getElementById('fileInput').click(); // פותח את חלון העלאת הקבצים
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    const files = event.target.files;
    const imageContainer = document.getElementById('imageContainer');
    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
