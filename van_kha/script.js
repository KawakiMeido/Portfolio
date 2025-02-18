const notesContainer = document.getElementById('notes-container');

function createRandomNotes() {
  const noteCount = 50; // Số lượng nốt nhạc muốn tạo
  const images = ['nhac1.png', 'nhac2.png', 'sao1.png']; // Các hình ảnh nốt nhạc
  const noteWidth = 40; // Kích thước tối đa của nốt nhạc

  for (let i = 0; i < noteCount; i++) {
    const note = document.createElement('img');
    note.classList.add('note');

    // Chọn hình ảnh ngẫu nhiên
    const randomImage = images[Math.floor(Math.random() * images.length)];
    note.src = `images/${randomImage}`;  // Đảm bảo đường dẫn ảnh chính xác

    // Thiết lập vị trí và kích thước ngẫu nhiên
    const randomLeft = Math.random() * 100; // Vị trí bắt đầu ngang (từ 0 đến 100% màn hình)
    const randomSize = Math.random() * (noteWidth - 20) + 20; // Kích thước ngẫu nhiên từ 20px đến 40px

    note.style.left = `${randomLeft}%`;
    note.style.width = `${randomSize}px`;
    note.style.position = 'absolute';
    note.style.top = `-10px`; // Đặt nốt nhạc bắt đầu từ trên cùng của màn hình

    // Thêm hiệu ứng để nốt nhạc rơi xuống
    note.style.animation = `fall ${Math.random() * (5 - 3) + 3}s linear infinite`;

    // Thêm nốt nhạc vào container
    notesContainer.appendChild(note);
  }
}

window.onload = createRandomNotes;
