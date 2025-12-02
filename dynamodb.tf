resource "aws_dynamodb_table" "visitor_counter" {
  name           = "cloud-resume-visitor-counter"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Name        = "CloudResumeVisitorCounter"
    Environment = "production"
  }
}

# Initialize the counter with a default value
resource "aws_dynamodb_table_item" "visitor_count" {
  table_name = aws_dynamodb_table.visitor_counter.name
  hash_key   = aws_dynamodb_table.visitor_counter.hash_key

  item = jsonencode({
    id = { S = "visitor_count" }
    count = { N = "0" }
  })

  lifecycle {
    ignore_changes = [item]
  }
}