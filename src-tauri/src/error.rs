use serde::{Deserialize, Serialize};
use thiserror::Error;

#[derive(Serialize, Deserialize, Debug, Error)]
pub enum CommandError {
    #[error("Docker API error: {0}")]
    DockerError(String),
    #[error("Unexpected error: {0}")]
    UnexpectedError(String),
}
