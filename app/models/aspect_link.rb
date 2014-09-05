#   Copyright (c) 2010-2011, Diaspora Inc.  This file is
#   licensed under the Affero General Public License version 3 or later.  See
#   the COPYRIGHT file.

class AspectLink < ActiveRecord::Base

  belongs_to :aspect

  def as_json(opts={})
    {
      :id => self.id,
      :aspect_id  => self.aspect_id,
      :link => self.link
    }
  end
 
end
