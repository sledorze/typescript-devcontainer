FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# GitLeaks

# Set Gitleaks version
ENV GITLEAKS_VERSION="8.18.1"

# Download and install Gitleaks
RUN wget https://github.com/zricethezav/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz && \
    tar -xzf gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz && \
    mv gitleaks /usr/local/bin/ && \
    chmod +x /usr/local/bin/gitleaks && \
    rm gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz
