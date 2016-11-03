#This will get rendered on the user's dashboard, which means we'll have to filter out (next if) the ones that the user id not author

@bills.each do |bill|
  next if bill.author != current_user

  json.set! bill.id do
    json.author bill.author.id
    json.title bill.title
    json.amount bill.amount
  end
end
