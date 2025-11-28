# Simple dev Dockerfile for Rust backend (runs cargo run)
FROM rust:1.73

WORKDIR /usr/src/app

# copy everything (dev-friendly)
COPY . .

# ensure the start script is executable
RUN chmod +x ./start-backend.sh

# default command runs the start script (cargo run)
CMD ["./start-backend.sh"]
