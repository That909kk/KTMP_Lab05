# Sử dụng base image của Go
FROM golang:1.21-alpine AS builder

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file go vào container
COPY main.go .

# Biên dịch chương trình Go thành một binary
RUN go build -o app main.go

# Tạo một container nhỏ hơn để chạy ứng dụng
FROM alpine:latest

# Thiết lập thư mục làm việc trong container
WORKDIR /root/

# Copy binary từ container builder sang
COPY --from=builder /app/app .

# Chạy ứng dụng
CMD ["./app"]
