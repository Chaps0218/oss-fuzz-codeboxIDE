FROM gcr.io/oss-fuzz-base/base-builder-javascript

COPY build.sh $SRC/

# Clone your project's repository
RUN git clone https://github.com/CodeboxIDE/codebox.git $SRC/codeboxide

# Copy your fuzz tests (if they're not already in the repo)
COPY fuzz_workspace.js $SRC/codeboxide/

ENV FUZZING_LANGUAGE=javascript

WORKDIR $SRC/codeboxide