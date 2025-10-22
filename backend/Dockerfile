# Stage 1: Build
FROM rust:latest as builder

WORKDIR /usr/src/fundyze-backend

# Copy manifests
COPY Cargo.toml ./

# Copy source code
COPY src ./src

# Build for release
RUN cargo build --release

# Stage 2: Runtime
FROM debian:bookworm-slim

# Install necessary runtime dependencies
RUN apt-get update && \
    apt-get install -y ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the built executable from builder
COPY --from=builder /usr/src/fundyze-backend/target/release/fundyze-backend /app/fundyze-backend

# Expose port (adjust if needed)
EXPOSE 8080

# Run the binary
CMD ["./fundyze-backend"]
