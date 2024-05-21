// Định nghĩa Type Alias cho kiểu dữ liệu hóa đơn
type Invoice = [number, string, number];

// Viết hàm nhận vào một Tuple và trả về chuỗi mô tả hóa đơn
function describeInvoice(invoice: Invoice): string {
    const [invoiceNumber, creationDate, totalAmount] = invoice;
    return `Hóa đơn số: ${invoiceNumber}, Ngày tạo: ${creationDate}, Tổng tiền: ${totalAmount.toFixed(2)} VND`;
}

const invoice: Invoice = [12345, "2024-05-22", 1500000];

const description = describeInvoice(invoice);
console.log(description); // In ra: Hóa đơn số: 12345, Ngày tạo: 2024-05-22, Tổng tiền: 1500000.00 VND
